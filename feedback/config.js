/* Where responses go: the "Score views study" Google Form and its linked Sheet (see SETUP.md). */
window.FEEDBACK_CONFIG = {
  formAction: 'https://docs.google.com/forms/d/e/1FAIpQLSdXJsthQ4sk8NxQgfPqAVo2kUBrfV3Zwyud3WpMhOvNIMNLCw/formResponse',
  fields: {
    name: 'entry.456381234',   // "Name": kept out of the public results tab
    email: 'entry.92141633',   // "Email ID": kept out of the public results tab
    choice: 'entry.731283202',
    why: 'entry.1585389199',
    details: 'entry.1689311046'
  },
  resultsCsv: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT9sI3h0Ef72Ejsp8rfY9nTeTxixTNyVFdWQqiWJ-8ILrazVYB2yhM4-cgVBOTvkp--P8b8z8Jk38xU/pub?gid=222214392&single=true&output=csv'
};
