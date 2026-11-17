# Design-system patterns for multi-select from a long, categorised list, and showing the current selection

Context: fixed 548px side panel; coordinator picks several accommodations from 30 to 200+ items in about 6 categories, with search and category tabs; must review the selection and add one optional comment before confirming; footer summary ruled out.

Retrieval note (28 Oct 2026): Pages fetched live on this date. Several sites render on the client or block fetching, so their body text could not be retrieved. These are Salesforce LDS 2 (lightningdesignsystem.com), the LWC dual-listbox reference (403), Polaris (polaris-react now redirects to shopify.dev), Material 3 chips (no body text returned), PrimeReact PickList (redirect, then 404) and the Carbon for IBM Products "Add and select" pattern (behind IBM login). Claims from these sources are listed under Gaps, not as findings.

## 1. Transfer list / dual listbox: who documents it, and what they say about narrow widths and long lists

### Takeaway
Only Ant Design documents a transfer list in real depth. Salesforce has a "dueling picklist" blueprint marked "Desktop Only", with almost no written guidance, and the W3C APG offers a rearrangeable-listbox example. None of these gives width guidance that would let two columns fit a 548px panel, and Ant's default column tokens (180px or 250px wide, 200px tall) are built for short lists. Ant says Transfer "take[s] up more space".

### Cited Findings
- Ant Design Transfer: "It is a select control essentially which can be used for selecting multiple items." It "can display more information for items and take up more space." — [Ant Design Transfer](https://ant.design/components/transfer)
- Ant Transfer is controlled-only ("uncontrolled mode is not supported"). The left column is `source` and the right is `target`. `targetKeys` sets "keys of elements that are listed on the right column", and `titles` sets column headings. — [Ant Design Transfer](https://ant.design/components/transfer)
- Ant Transfer size tokens: `listWidth` 180 (default), `listWidthLG` 250, `listHeight` 200. `listStyle` is deprecated in favour of `styles.section`. — [Ant Design Transfer](https://ant.design/components/transfer)
- Ant Transfer long lists: `showSearch` adds "a search box ... on each column". The Pagination demo is described as "Store a large amount of items with pagination". `pagination` does "Not work in render props". The page does not mention virtual scrolling. — [Ant Design Transfer](https://ant.design/components/transfer)
- Ant Transfer selection display: each column header has a select-all checkbox (`showSelectAll`, default true). `selectAllLabels` can be a function that receives `selectedCount` and `totalCount`. Demos show per-column counts such as "11 items" or "0 item", with wording set through `locale.itemUnit`/`itemsUnit`. — [Ant Design Transfer](https://ant.design/components/transfer)
- Ant Transfer `oneWay` displays "as single direction style" (items go to the target and are removed there, with no move-back buttons). Tree and Table render-props let either column be a Tree (useful for categories) or a Table. — [Ant Design Transfer](https://ant.design/components/transfer)
- Salesforce LDS (v1 blueprint) Dueling Picklist: "A dueling-picklist is used to move options between two lists and is often referred to as a multi-select." It is tagged "Desktop Only". The class `.slds-dueling-list__column_responsive` makes the layout "responsive", with no breakpoints given. The fetched page has no long-list or accessibility prose, only class names (`.slds-is-grabbed`, `.slds-is-selected`). — [SLDS v1 Dueling Picklist](https://v1.lightningdesignsystem.com/components/dueling-picklist/)
- SLDS listbox length classes `.slds-dropdown_length-5/7/10` force overflow scrolling after 5, 7 or 10 items. These belong to the listbox, not the dueling picklist. — [SLDS v1 Dueling Picklist](https://v1.lightningdesignsystem.com/components/dueling-picklist/)
- W3C APG Listbox has a "rearrangeable" example: single- and multi-select listboxes with toolbars for adding, moving and removing options. The APG does not frame it as a dual-list pattern. — [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- Carbon's dropdown page documents no transfer or dual list. Its multiselect is the multi-pick control. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)

### Inferences
- Two Ant LG columns (2 × 250) plus a move-button gutter come to about 540px. That technically fits 548px, but each column holds only around 12 to 14 characters per line after checkboxes and padding, and with the 200px default height each list shows only 5 to 6 rows. For 200+ items in 6 categories this is a poor fit, and the "Desktop Only" tag on Salesforce's version points the same way.
- The useful idea from Transfer is a separate, always-visible "target" list with a count in its header ("4 items"), shown apart from the catalogue. In a 548px panel this could be stacked vertically (selected section above the catalogue) rather than placed side by side. That is an adaptation; no design system documents it.
- `oneWay` plus Tree render is the closest documented match to "catalogue grouped by category, selected list where you can remove items".

### Gaps
- Fluent 2 and Carbon (core): no transfer or dual-listbox component was found on the pages fetched. This is absence of evidence from the pages checked, not a confirmed statement.
- PrimeReact PickList: the docs URL redirected and then returned 404, so its responsive stacking and accessibility guidance could not be checked.
- Salesforce LWC `lightning-dual-listbox` (min/max, keyboard, live region): the reference returned 403. LDS 2 pages are client-rendered and gave no text.
- No design system found gives a maximum item count for a transfer list.

## 2. Multi-select combobox, tag input and token field: how the selection is shown

### Takeaway
Three documented ways to show the selection recur:
1. **Count tag in the field.** Carbon uses this and pins the selected items to the top of the menu when it reopens.
2. **Each item as a chip inside the field.** Atlassian Select and Fluent TagPicker do this, and the field wraps and grows in height.
3. **Selected items listed first in a panel.** Primer SelectPanel does this, with an apply/save step for modal variants.

None of the fetched docs documents a "show selected only" toggle. Carbon and Primer both use "selected pinned to top" as a list behaviour, not as a separate summary area.

### Cited Findings
**Carbon MultiSelect / FilterableMultiSelect**
- Use "when the user needs to select multiple options from a list of predefined options". Each option has a checkbox. The menu stays open while selecting and closes on field click, outside click, Esc or Tab. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Selection display: "A tag appears to the left of the field text with the total number of selected options". The tag's "x" clears all selections. Individual items are removed by unchecking them. Placeholder text can change to describe the selection. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- On reopen, selected options move to the top in "an alphanumeric order". This also applies to the filterable variant. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Optional parent "All" checkbox, labelled "All" or "All roles" and not as an action. It is indeterminate when some items are selected, and clicking it in that state clears all. Avoid it where "choosing all and choosing none means the same". — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Width: "There is no minimum or maximum width for a dropdown." No maximum option count is given. Avoid multi-line option text: truncate with an ellipsis and a tooltip. Use alphabetical order. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Filterable: typing shows options that start with the typed characters, and a separate "x" clears the filter text, distinct from the count tag. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)

**Atlassian Select (multi)**
- "Once selected, each option is shown in the text input." Users "remove selections by clicking the x". A clear-all control "only appears when at least one option has been selected". It is kept out of the tab order "To avoid introducing multiple tab stops per text field", and keyboard users clear with Delete. — [Atlassian Select usage](https://atlassian.design/components/select/usage)
- "Use checkboxes for options that require a button press to apply the setting." — [Atlassian Select usage](https://atlassian.design/components/select/usage)
- "Don't overwhelm people with too many options". Keep options to one line. Order by usefulness, because alphabetical "isn't localization-friendly" (this conflicts with Carbon and GOV.UK, which default to alphabetical). — [Atlassian Select usage](https://atlassian.design/components/select/usage)
- Grouping: if grouped and ungrouped options are mixed, "the group names will be ignored". Group only when every item fits a group, and avoid groups of one ("can be very noisy"). — [Atlassian Select usage](https://atlassian.design/components/select/usage)

**Fluent 2 TagPicker**
- Choosing an item "will close the dropdown and insert a tag showing the selection into the input". Tags "wrap and will make the height grow to fit the content". Truncating long tag text "isn't provided out of the box". — [Fluent 2 TagPicker usage](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage)
- A secondary action slot is available (for example "Clear all"). Typing filters, and the first item is the closest match. — [Fluent 2 TagPicker usage](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage)
- The page gives no maximum option count and no grouping guidance. — [Fluent 2 TagPicker usage](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage)

**GitHub Primer SelectPanel**
- `showSelectedOptionsFirst`: "Whether to display the selected items at the top of the list." In the multi-select example the anchor button shows the selection as a comma-separated list of names, not a count. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- Commit model: "In anchored panels, changes are applied when the panel closes". In modal or full-screen variants, changes apply when the primary action is confirmed ("Save"). `onCancel` restores the previous selection. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- `showSelectAll` "allows users to select or deselect all visible items at once", with an indeterminate state. The examples keep the current selection while the user filters. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- `secondaryAction` renders in the panel footer. `footer` is deprecated. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)

**Adobe Spectrum TagGroup**
- `maxRows` limits the rows initially shown and "will render a button that allows the user to expand to show all tags". `onAction` plus `actionLabel` adds a button after the tags (example label "Clear"). Removal is opt-in through `onRemove`. — [React Spectrum TagGroup](https://react-spectrum.adobe.com/react-spectrum/TagGroup.html)

**GOV.UK Checkboxes** (used as the non-combobox baseline)
- Use when users "select multiple options from a list". Group them in a `<fieldset>` with a `<legend>`. "Order checkbox options alphabetically by default", or from most to least common. "Do not pre-select checkbox options". Use the hint "Select all that apply" because users may not know how many they can pick. — [GOV.UK Checkboxes](https://design-system.service.gov.uk/components/checkboxes/)

### Inferences
- For 200+ items with a separate review step, Carbon's count tag alone does not show which items are selected, and in-field chips (Atlassian, Fluent) grow without limit. The pattern best matched to the brief is Primer's "selected first" with an explicit Save step, combined with Spectrum's `maxRows` plus "show all" for a chip summary.
- Atlassian's rule ("checkboxes for options that require a button press to apply") supports a checkbox list rather than a combobox, because the accommodation picker has a confirm step.
- Moving selected items to the top only when the list reopens (Carbon) avoids items jumping while the user is ticking them. That matters when the list stays open across many selections.

### Gaps
- Polaris Combobox with Tags (`verticalContent`): the docs URL now redirects to shopify.dev/docs/api/polaris and the current guidance was not retrieved. A community post says the web-components `s-text-field` lacks vertical content and a Tag equivalent, which suggests the React pattern may not have carried over ([Shopify community](https://community.shopify.dev/t/s-text-field-missing-vertical-content-support-and-tag-component-equivalent/18676)). That is a user report, not official documentation.
- Material 3 input chips: the page returned no body text.
- "Show selected only" toggle: no fetched design system documents one.

## 3. Long checkbox list with search and grouped headings (sticky headers, count per group)

### Takeaway
Grouping is documented (Primer `groupMetadata`, Atlassian group rules, APG `role="group"`, GOV.UK fieldsets). Sticky group headers and a selected count per group were not documented in any source fetched. Virtualisation is advised past 100 items (Primer), but Primer's virtualisation turns off when groups are used.

### Cited Findings
- Primer: "Items can be grouped to provide additional context or to visually separate them", and "Each group can have a title". `virtualized` is "Recommended for lists with more than 100 items". It has no effect when `groupMetadata` is provided. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- Atlassian: group only when every item belongs to a group, avoid single-item groups, and use groups when categories are well known or to disambiguate identical names. — [Atlassian Select usage](https://atlassian.design/components/select/usage)
- APG: options may be wrapped in `group` elements inside the listbox. Each group must contain at least one option and be named through `aria-label` or `aria-labelledby`. Many options sharing the same leading words slow scanning, so consider separate listboxes. — [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- GOV.UK: group checkboxes in a `<fieldset>` with a `<legend>`. Gives no specific long-list guidance. — [GOV.UK Checkboxes](https://design-system.service.gov.uk/components/checkboxes/)
- Carbon parent checkbox: indeterminate when partly selected. This is the documented way to show partial selection within a set. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Ant Transfer `selectAllLabels(selectedCount, totalCount)` is a documented "x of y" counter at list level (per column, not per category). — [Ant Design Transfer](https://ant.design/components/transfer)

### Inferences
- A per-category count ("Mobility · 2") on the category tabs or group headers is not documented anywhere checked. It would be a local extension, and the precedent is Ant's per-column count.
- Category tabs on top of grouped headings means two levels of grouping. Atlassian's warning about noisy groups suggests using one or the other: tabs to filter, or headings inside an "All" view.

### Gaps
- No source fetched documents sticky group headers.
- No source fetched documents a selected count per group.

## 4. Free-text note or comment in the same view as the selection

### Takeaway
No design-system source was found that documents an optional message or comment field next to a multi-select (for example a share dialog). The closest documented pieces are commit models: Primer applies the selection on the primary "Save" action, which gives a natural place to put a comment field before it.

### Cited Findings
- Primer SelectPanel: modal and full-screen variants apply changes on the primary action ("Save"), and `onCancel` reverts. `secondaryAction` sits in the footer. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- GOV.UK: conditionally reveal only questions, and "If the related question is complicated or has more than one part, show it on the next page". — [GOV.UK Checkboxes](https://design-system.service.gov.uk/components/checkboxes/)
- Indirect evidence from outside design systems: Microsoft merged two people pickers in the OneDrive/SharePoint share dialog into one. This is a forum post, not design guidance. — [Microsoft Tech Community](https://techcommunity.microsoft.com/discussions/onedriveforbusiness/change-to-odbspo-sharing-dialog-specific-people-option/101388)

### Inferences
- A single optional comment field that is always visible (not a conditional reveal) fits GOV.UK's rule. It is a simple field, not a complex follow-up question.

### Gaps
- Atlassian, Fluent, Material and Polaris share dialogs were not found documented as patterns with a message field. A web search ("share dialog add a message people picker") returned only product help pages and forums.

## 5. Accessibility guidance

### Takeaway
The APG defines the multi-select listbox model: `aria-multiselectable`, a consistent use of `aria-checked` or `aria-selected`, Space to toggle, and separate controls for select-all and clear-all. Carbon documents the keyboard for both multiselect variants. None of the fetched sources documents a live announcement of the selection count, and keyboard removal of chips is documented only by Carbon (tags), Atlassian and Fluent.

### Cited Findings
- APG: the listbox sets `aria-multiselectable="true"`. Selected options carry `aria-selected` or `aria-checked`, used consistently and not mixed. Using `aria-checked` for multi-select is "a recommended convention". — [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- APG recommended model: Space toggles. Shift+Arrow and Shift+Space ranges, Ctrl+A select-all and similar are optional. On entry, focus goes to the first selected option, or the first option if none is selected. Use separate controls, such as buttons, for select-all and clear-all. A listbox "does not provide an accessible way to present a list of interactive elements" (use Grid instead). — [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- APG: set `aria-setsize` and `aria-posinset` for lists loaded while scrolling (relevant to virtualised 200+ lists). The page gives no live-announcement guidance. — [APG Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- Carbon multiselect: opens with Down, Enter or Space, which "are also used to toggle the selection of any option". Esc closes. "Pressing `Delete` while focus is in the collapsed field will clear all selected options". — [Carbon Dropdown accessibility](https://carbondesignsystem.com/components/dropdown/accessibility/)
- Carbon filterable multiselect: "`Space` cannot be used for selecting" because it types into the filter, so Enter selects. The page does not document count announcements. — [Carbon Dropdown accessibility](https://carbondesignsystem.com/components/dropdown/accessibility/)
- Carbon dismissible tags: Tab to focus the close icon, and Enter or Space "will dismiss, close, or remove the tag". — [Carbon Tag usage](https://carbondesignsystem.com/components/tag/usage/)
- Fluent TagPicker: Backspace removes the last tag when the input has focus, and this "should be communicated to the user to avoid confusion". Use `aria-label` on `TagPickerInput`. — [Fluent 2 TagPicker usage](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage)
- Atlassian: keep the clear control out of the tab order and clear with Delete. Use a visible label outside the field, because placeholder text is "not accessible and disappears when information is entered". — [Atlassian Select usage](https://atlassian.design/components/select/usage)
- React Aria TagGroup: Escape defaults to `'clearSelection'`, and changing it "eliminates a keyboard user's ability to easily clear selection". Removal goes through `onRemove`, and the page does not name the keys. — [React Aria TagGroup](https://react-aria.adobe.com/TagGroup)
- GOV.UK: "Always position checkboxes to the left of their labels" (for screen magnifier users). Conditional reveals with changed visibility fail WCAG 2.2 SC 4.1.2. — [GOV.UK Checkboxes](https://design-system.service.gov.uk/components/checkboxes/)
- Primer: an anchor that shows the current selection needs an associated label, and the examples use `aria-haspopup="dialog"`. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)

### Inferences
- In a checkbox list inside a panel (not a popup listbox), native checkboxes in fieldsets (GOV.UK) avoid the APG listbox keyboard model and handle Space-to-toggle natively. The APG warning that Space cannot be used while a filter input has focus (as in Carbon) does not apply when search and list are separate controls.
- A polite live region announcing "N selected" is a reasonable addition, but no source fetched requires or specifies it.

### Gaps
- No fetched source documents live announcement of the selection count, or where focus goes after a chip is removed.
- React Aria's keyboard specifics for TagGroup (grid role, Delete/Backspace) were not on the fetched page.

## 6. Behaviour with 10+ items selected (overflow, "+N more", wrapping)

### Takeaway
Documented strategies:
- **Collapse to a count** (Carbon count tag). Fixed size, but item names are hidden.
- **Wrap and grow** (Fluent TagPicker, Atlassian in-field chips). No documented limit.
- **Cap rows with an "expand" button** (Spectrum `maxRows`).
- **Wrap limit** (Carbon: selectable tags may wrap, but "Do not wrap tags in a group of more than five lines").

No fetched source specifies a "+N more" chip.

### Cited Findings
- Carbon multiselect shows one tag with "the total number of selected options", whatever the count. — [Carbon Dropdown usage](https://carbondesignsystem.com/components/dropdown/usage/)
- Carbon tags: "Do wrap tags in a group to a few multiple lines" and "Do not wrap tags in a group of more than five lines". Use 8px between tags. Ideally keep titles "under 20 characters". Truncate with an ellipsis and show a tooltip on hover or focus. "Do not wrap overflow tag title text to multiple lines." Overflow tags can be shown "in a popover, modal, or detail view". — [Carbon Tag usage](https://carbondesignsystem.com/components/tag/usage/)
- Carbon Tag page: it "does not specify how many tags to show before overflowing, nor any '+N' overflow tag". — [Carbon Tag usage](https://carbondesignsystem.com/components/tag/usage/)
- Fluent TagPicker: tags "wrap and will make the height grow to fit the content". Truncation is left to the product team. — [Fluent 2 TagPicker usage](https://fluent2.microsoft.design/components/web/react/core/tagpicker/usage)
- Spectrum TagGroup `maxRows` renders a button to "expand to show all tags" (the remaining tags). Collapsing back is not described. — [React Spectrum TagGroup](https://react-spectrum.adobe.com/react-spectrum/TagGroup.html)
- Primer anchor button: comma-separated names. The page does not document truncation behaviour. — [Primer SelectPanel](https://primer.style/product/components/select-panel/)
- Ant Transfer: the target column is a scrolling list with a count header, so 10+ items is just a longer list (pagination is optional). — [Ant Design Transfer](https://ant.design/components/transfer)

### Inferences
- At 548px with 8px gaps and chips under 20 characters, about 3 to 4 chips fit per line. Carbon's five-line limit then means roughly 15 to 20 chips before the guidance is broken. Accommodation names such as "Extra Time +25%" fit the 20-character guidance, but longer ones would need truncation with a tooltip.
- For 10+ selections, the documented options are: a capped chip area (Spectrum `maxRows`, Carbon five lines) with an expand control, or a list-style selected section with a count header (Ant target column). A list section avoids truncating long names and gives each item a clear removal target.

### Gaps
- No design system fetched documents a "+N more" chip specifically.
- No guidance was found on a maximum number of selections for any of these components.
