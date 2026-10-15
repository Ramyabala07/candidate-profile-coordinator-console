/* Where responses go. Fill these in from the Google Form (see SETUP.md); until then the flow runs in preview mode
   and keeps responses only in the browser that gave them. */
window.FEEDBACK_CONFIG = {
  formAction: '',          // https://docs.google.com/forms/d/e/<form id>/formResponse
  fields: {                // the entry.<number> ids from the form's pre-filled link
    choice: '',
    why: '',
    details: ''
  },
  resultsCsv: ''           // the linked Sheet, published to the web as CSV
};
