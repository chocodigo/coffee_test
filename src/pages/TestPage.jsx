import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import Test from "../styles/testPage";
import useStores from "../stores/useStores";
import { questionList } from "../data";

const TestPage = observer(() => {
  const { capplStore } = useStores();

  const answerClickHandler = (e, item) => {
    capplStore.setScore(item.score);
    capplStore.setTestPage(capplStore.testPage + 1);
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
