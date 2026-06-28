export const scienceData = {
  class: {
    id: 1,
    name: "Class 9",
  },

  subject: {
    id: 2,
    class_id: 1,
    name: "Science",
  },

  chapters: [
    {
      id: 1,
      subject_id: 2,
      chapter_number: 1,
      name: "Scientific Study",
      description: null,
      questions: [
        {
          id: 1,
          chapter_id: 1,
          question: "How is scientific study done?",
          difficulty: null,
          source: null,
          answers: [
            {
              id: 1,
              question_id: 1,
              answer:
                "Scientific study is done by following a systematic process: observation, problem identification, hypothesis formation, experimentation, data collection, analysis, conclusion and reporting.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      subject_id: 2,
      chapter_number: 2,
      name: "Classification of Living Beings",
      description: null,
      questions: [],
    },
  ],
};