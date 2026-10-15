/* Where responses go: a Google Form (see SETUP.md). Until formAction is set, the flow runs in preview mode
   and keeps answers only in the browser that gave them. */
window.FEEDBACK_CONFIG = {
  formAction: '',          // https://docs.google.com/forms/d/e/<form id>/formResponse
  fields: {                // the entry.<number> ids from the form's pre-filled link
    choice: '',
    why: '',
    details: ''
  },
  resultsCsv: ''           // the linked Sheet, published to the web as CSV
};
