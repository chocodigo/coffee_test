import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import Test from "../styles/testPage";
import useStores from "../stores/useStores";
import { questionList } from "../data";
import { useNavigate } from "react-router-dom";

const TestPage = observer(() => {
  const { capplStore } = useStores();
  const navigate = useNavigate();
  const answerClickHandler = (e, item) => {
    if (capplStore.testPage < questionList.length) {
      capplStore.setScore(item.score);
      capplStore.setTestPage(capplStore.testPage + 1);
    } else {
      navigate("/loading");
    }
  };
  return (
    <Test.PageWrapper>
      <Test.PageNumber>
        {capplStore.testPage}/{questionList.length}
      </Test.PageNumber>
      <Test.ProgressBar>
        <Test.ProgressStatus
          width={capplStore.testPage / questionList.length}
        />
      </Test.ProgressBar>
      <Test.Question
        dangerouslySetInnerHTML={{
          __html: questionList[capplStore.testPage - 1].question,
        }}
      />
      {questionList[capplStore.testPage - 1].answerList.map((item, idx) => {
        return (
          <Test.AnswerBtn
            key={`answer_${questionList[capplStore.testPage - 1].id}_${idx}`}
            dangerouslySetInnerHTML={{
              __html: item.text,
            }}
            onClick={(e) => answerClickHandler(e, item)}
          />
        );
      })}
    </Test.PageWrapper>
  );
});

export default TestPage;
