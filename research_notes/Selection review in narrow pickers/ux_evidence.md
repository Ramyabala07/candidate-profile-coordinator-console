# UX evidence: showing the current selection in a narrow multi-select picker, and combining selection review with a comment

Context: a fixed 548px side panel. A coordinator picks 1 to 5 accommodations from a catalogue of 30 to 200+ items in about 6 categories, using search and category tabs. They must see what they picked, can add one optional comment, then confirm. Footer summaries are ruled out.

Evidence labels used below:
- **[Empirical]**: based on reported user testing or benchmark data.
- **[Expert]**: guidance or opinion with no study data cited.
- **[Spec]**: a standard or design-system specification.

Research was done on 28 Oct 2026. Several primary pages were read in full: Baymard, NN/g x3, GDS blog, GOV.UK pattern, W3C APG, Smart Interface Design Patterns. Other claims rely on search-result summaries and are marked "(snippet)".

## 1. Multi-select patterns (chips vs. checkboxes vs. listbox vs. dual listbox) and visibility of system status

### Takeaway
No source says chips should replace checkboxes. For long lists, the consistent guidance is a filterable checkbox list or listbox, with the selected items also shown outside the scrolling region, usually as tokens or chips above the list. A dual listbox gives the best side-by-side review, but it is designed for bulk selection and wide layouts. NN/g's status heuristic supports always showing the selection explicitly. A count alone is not enough.

### Cited Findings
- **[Expert] NN/g, Anna Kaley, 12 Apr 2020.** In a scrollable listbox, users may not see every selected option. The advice is to "show selected items above the listbox as tokens or highlight the selected items in a nonscrollable list." — [NN/g: Listboxes vs. Dropdown Lists](https://www.nngroup.com/articles/listbox-dropdown/)
- **[Expert] NN/g, same article.** Thresholds by number of options:
  - 5 or fewer: checkboxes or radios.
  - 5 to 15: either a dropdown or a listbox. Prefer the dropdown when space is tight.
  - More than 15: a listbox with most options visible, unless that forces excessive scrolling.
  - Dropdowns do not support multiselect. — [NN/g](https://www.nngroup.com/articles/listbox-dropdown/)
- **[Expert] NN/g, same article.** Steering Law: keep scrollable lists "short and wide", and limit the number of items they contain. Long, narrow lists are harder to navigate. — [NN/g](https://www.nngroup.com/articles/listbox-dropdown/)
- **[Expert] Vitaly Friedman, 2 Feb 2026.** Pattern definitions and trade-offs:
  - **Multiselect:** type-to-filter, with selections shown as pills or chips. Fast for 200+ items, but options stay hidden until the user types.
  - **Listbox:** all options are visible with scrolling. Good when users pick several items, but it takes space.
  - **Dual listbox (transfer list):** lets users review the selection "side-by-side with the source list before committing". He recommends it for roles and permissions.
  - Add Select all / Clear all at 7+ options. "Never hide frequently used options."
  - He cites no study data, and his claim that dual listboxes beat drag-and-drop is unsupported. — [Smart Interface Design Patterns: Combobox vs. Multiselect vs. Listbox](https://smart-interface-design-patterns.com/articles/combobox-multiselect-listbox/); also published in [Smashing Magazine, Feb 2026](https://smashingmagazine.com/2026/02/combobox-vs-multiselect-vs-listbox/)
- **[Expert] KDE HIG.** A multi-select list with more than a few items "might become difficult because selected as well as available items are not visible at once". This is the rationale for the dual-list pattern. — [KDE HIG: Dual-list](https://develop.kde.org/hig/patterns-content/duallist) (snippet)
- **[Expert] Adobe Commerce pattern library.** A multi-select dropdown suits 10+ options when space must be preserved and options need not be shown immediately. — [Adobe: Select from list](https://developer.adobe.com/commerce/admin-developer/pattern-library/getting-user-input/select-from-list) (snippet)
- **[Expert] NN/g, Aurora Harley, 3 Jun 2018 (Heuristic #1).** Showing the system state lets users feel in control, decide what to do next and trust the product. A checkmark or colour change confirms that a selection registered.
  - Loft keeps out-of-stock wish-list items visible and labels them. The article argues that silently removing items erodes trust.
  - This applies to hidden selections: a selection should never silently disappear from view. — [NN/g: Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/)
- **[Empirical] Baymard, Kathryn Reeves, 6 Oct 2020, updated 13 May 2026.** Based on large-scale desktop and mobile testing and benchmarks:
  - Without an overview of applied selections, users struggle to confirm what is applied and to remove items. Users who overlooked one applied filter misjudged the product range.
  - 28% of benchmark sites have no overview.
  - Showing only a count (for example "Filter (3)") "performed poorly in testing", because users still had to open the interface to see or remove items. — [Baymard: How to Design Applied Filters](https://baymard.com/blog/how-to-design-applied-filters)
- **[Spec] Design systems** (SAP Fiori filter feedback bar, Visa, Alberta, Phoenix Group) consistently show applied selections as removable chips with a clear-all option. — [Visa filters pattern](https://design.visa.com/patterns/filters); [Alberta: Add a filter chip](https://v2.design.alberta.ca/examples/add-a-filter-chip) (snippets)
- **[Spec] Maersk design system.** Highlight applied filters "both in their original placement, as well as in the applied filters section". — [Maersk: Filter patterns](https://designsystem.maersk.com/guidelines/search-filter-and-sort/filter-patterns/) (snippet)

### Inferences
- With 30 to 200+ items in about 6 categories, NN/g's thresholds point to a filterable list with search rather than a bare checkbox list. NN/g and Baymard both point to an explicit display of selected items outside the scrolling list.
- A dual listbox needs two columns. At 548px it would have to stack vertically, which in practice becomes "selected items above the list". It is also designed for bulk transfers, which is overkill for 1 to 5 picks.
- The Maersk guidance supports a dual signal: the item stays checked in place in the list, and it also appears in a selected area. These two signals complement each other.

### Gaps
- I found no controlled study comparing chips with checkbox-only lists for multi-select accuracy or speed.
- The full UXPin and UX Collective articles were not reviewed. Search surfaced only weak secondary posts.

## 2. Selected items above the list vs. pinning checked items to the top vs. a separate review step; layout shift

### Takeaway
The best-supported option is a selection area above the list, with checked items also staying in their original positions in the list. Baymard tested three overview placements and found them roughly equally effective, so visibility matters more than position. No source supports reordering checked items to the top of the list. The main cost of chips above the list is that each new row of chips pushes the list down. Baymard's mitigation is to cap or truncate rows after the first.

### Cited Findings
- **[Empirical] Baymard.** Placements tested on desktop:
  - Above the product list: ample space and large removal targets, but extra rows push products down, so truncate rows 2 and beyond.
  - Above the filter sidebar: keeps filtering in one area, but stacked filters push the sidebar down.
  - Below a horizontal filter toolbar.
  - Testing was "inconclusive" about which placement is best. Visibility is what matters. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)
- **[Empirical] Baymard, mobile, for narrow containers.**
  - **Horizontal scrolling row of chips.** Users may not notice the overflow. Combine three cues: truncate the last chip at about half its width, fade the edge, and state a count such as "4 Filters Applied".
  - **Stacked rows.** Every chip is visible but the list can be pushed out of view. A variant shows 1 to 2 rows plus a "See all applied filters" control. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)
- **[Empirical] Baymard.** 97% of benchmarked sites keep a chosen filter option in its original position in the list. An earlier problem of options disappearing after selection did not recur in later testing. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)
- **[Expert] NN/g.** Offers two alternatives: tokens above the listbox, or highlighting selected items in a non-scrolling list. It does not recommend reordering. — [NN/g](https://www.nngroup.com/articles/listbox-dropdown/)
- **[Expert] E-commerce filter plugins** offer "move selected options to top", "stay in position" and "scroll to first selected" as configuration choices. These are product features, not research findings. — [Super Speedy Filters docs](https://www.superspeedyplugins.com/kb/super-speedy-filters/features/widgets/widget-settings/show-selected-options-count-move-selected-options-to-top)
- **[Expert] Friedman 2026.** The dual listbox's main benefit is reviewing the selection beside the source list before committing. — [Smart Interface Design Patterns](https://smart-interface-design-patterns.com/articles/combobox-multiselect-listbox/)
- **[Spec] web.dev (Google) on layout shift.**
  - "A layout shift is only bad if the user isn't expecting it."
  - Shifts within 500 ms of user input are flagged `hadRecentInput` and excluded from CLS.
  - Shifts that respond to a click or typing are "generally fine" when they are close enough to the interaction to be clearly related. — [web.dev: CLS](https://web.dev/articles/cls); [web.dev: Debug layout shifts](https://web.dev/debug-layout-shifts/)
- **[Empirical] GDS 2019.** An autocomplete multi-select that showed selections below the text box failed in context. It duplicated existing tags, the selections were often hidden on mobile, and users could not see what they had picked. The team rejected it. — [GOV.UK Accessibility blog: dealing with a large amount of form inputs](https://accessibility.blog.gov.uk/2019/04/08/accessibility-lessons-dealing-with-a-large-amount-of-form-inputs/)

### Inferences
- **Layout shift.** The CLS metric excludes user-caused shifts, but CLS measures page stability, not pointer accuracy. When a click adds a chip row above the list, the item just clicked and its neighbours move down. A quick second click can then land on the wrong item. This is my inference; I found no study measuring it.
- **Ways to reduce the shift:**
  - Reserve fixed height for the selected area, sized for about one to two rows, which covers 1 to 5 picks.
  - Let chips wrap inside that reserved space, then truncate with "+N more".
  - Alternatively, place the selected area where growth does not move the list, for example inside the panel header region above the search. This trades proximity for stability.
- **Pinning checked items to the top.** This creates the "moving target" problem: the item jumps away from where the user clicked, which conflicts with Baymard's finding that options should stay in place. It is better done only at render time, for example when the panel reopens or a tab changes, not live on click. This is an inference, and no source tests it directly.
- **A separate review step.** For 1 to 5 picks, a separate step mostly duplicates what an always-visible selected area already shows. See section 4.

### Gaps
- No empirical comparison of "pin to top" vs. "keep in place" in a picker was found. Baymard's benchmark detail on this is paywalled.
- No study quantifies misclicks caused by chip-induced shifts.

## 3. Keeping the selection visible when search filters the list

### Takeaway
GDS found and shipped one direct answer: checked items always stay visible regardless of the filter text, and a hidden live region announces both the match count and the selected count. An always-visible selected area above the list gives the same protection without breaking the filtered result set.

### Cited Findings
- **[Empirical, in production] GDS, Andy Sellick, 8 Apr 2019.** Context: GOV.UK finder facets with hundreds of checkbox options.
  - Problems found: keyboard and screen reader users were slow to reach later items, accurate mouse and touch navigation got harder as the list grew, and there was no search.
  - Fix: a text filter on the existing checkbox list. Matching ignores case and extra spaces and treats "and" and "&" as equal.
  - "Checked checkboxes always remain visible, regardless of the filter, so users can see their selections."
  - Hidden text announces how many matches were found and how many options are selected, and signals that something is happening while the user types.
  - The article describes iterative work and does not report a formal study. — [GOV.UK Accessibility blog](https://accessibility.blog.gov.uk/2019/04/08/accessibility-lessons-dealing-with-a-large-amount-of-form-inputs/)
- **[Spec] GOV.UK Publishing "option select" component.** A scrollable checkbox list with a filter, used where a multi-select would otherwise be used. — [GOV.UK Publishing Components: option select](https://components.publishing.service.gov.uk/component-guide/option_select) (snippet)
- **[Spec] GOV.UK accessible-autocomplete-multiselect fork** adds multi-select support to GDS's autocomplete. — [GOV.UK docs](https://docs.publishing.service.gov.uk/repos/accessible-autocomplete-multiselect.html) (snippet)
- **[Expert] GOV.UK Design System backlog.** Proposes a searchable, selectable hybrid for lists of 30+ items. No confirmed outcome. — [GitHub issue #238](https://github.com/alphagov/govuk-design-system-backlog/issues/238) (snippet)
- **[Empirical] Baymard.** Without an overview, users forget applied selections and misjudge results. This is the same "lost selection" risk that search filtering creates. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)

### Inferences
- There are two valid options. (a) Show checked items inside the filtered list even when they do not match, as GDS did. (b) Keep the filtered list pure and rely on the always-visible selected area above it.
- Option (b) avoids mixing non-matching items into the search results. Option (a) needs a visual divider or label such as "Selected" so that non-matching rows do not look like search hits.
- With category tabs, the same logic applies across tabs: picks from other tabs must stay visible in the selected area, and a per-tab count badge helps.
- Clearing or changing the search should never clear selections.

### Gaps
- No usability data was found on users' mental model when non-matching selected items stay in a filtered list.

## 4. Review or confirmation steps before a consequential action (single view vs. separate review)

### Takeaway
A separate review or confirm step is justified for serious or irreversible actions, or for long, multi-section transactions. For short, routine, reversible actions, the guidance favours a specific in-context summary and an action-labelled button (or undo), because frequent confirmations train people to click through them.

### Cited Findings
- **[Expert] NN/g, Jakob Nielsen, 18 Feb 2018, reviewed Aug 2026.**
  - Reserve confirmations for serious consequences, especially irreversible ones.
  - Avoid them for routine actions: overuse trains automatic clicking and weakens later warnings.
  - Restate the specific request. Do not ask "Are you sure?". Label buttons with the outcome.
  - Use progressive disclosure for details, set no default "Yes", and prefer undo where possible.
  - Weigh severity against frequency.
  - The article cites no formal study. — [NN/g: Confirmation Dialogs](https://www.nngroup.com/articles/confirmation-dialog/)
- **[Spec] GitHub Primer.** Do not overuse confirmations for low-risk actions or for actions that are easy to undo. — [Primer: ConfirmationDialog guidelines](https://primer.style/product/components/confirmation-dialog/guidelines) (snippet)
- **[Spec/Expert] GOV.UK Design System, "Check answers".**
  - Use one check page immediately before confirmation for small to medium transactions, or one per section for very large ones.
  - The page claims it increases confidence and reduces errors, but reports no data; it links to a Carer's Allowance case study.
  - Provide a "Change" link per item, return the user to the check page after an edit, and show skipped optional questions as "Not provided".
  - For several items of the same type, use the Summary card component. — [GOV.UK: Check answers](https://design-system.service.gov.uk/patterns/check-answers/)
- **[Spec] NHS, Scottish Government, Ontario and Alberta design systems** follow the same rule: one review page before submission for short to medium forms, and per-section reviews for large ones. — [NHS: Check answers](https://service-manual.nhs.uk/design-system/patterns/check-answers); [Scottish Gov: Check answers](https://designsystem.gov.scot/patterns/check-answers); [Alberta: Review page](https://design.alberta.ca/examples/review-page) (snippets)
- **[Spec] US CMS design system.** Do not use a review pattern when the answers are not reviewable or editable. — [CMS: Form review](https://design.cms.gov/patterns/Forms/form-review/) (snippet)
- **[Expert/Spec] DWP and NSW design systems** prefer batch filtering ("apply" once) over live updates when users select several related options. DWP cites research that live updates cause unintended result changes. — [DWP: Filters research](https://design-system.dwp.gov.uk/research/filters); [NSW: Filters](https://designsystem.nsw.gov.au/components/filters) (snippets)

### Inferences
- **Why a single view fits here.** Adding 1 to 5 accommodations is a short transaction and is usually editable afterwards. A separate review screen mostly repeats the selected area.
- **A specific confirm button.** Make the primary button state the action, for example "Add 3 accommodations". This gives the specific-confirmation benefit NN/g recommends without an extra step.
- **When a separate step is warranted.** If the action triggers irreversible effects, such as notifying the candidate, changing the exam timer or locking the exam slot, a lightweight review or confirm is justified. That fits high-trust B2B or admin contexts.
- **Batch model.** "Select several, then confirm once" matches the batch-filter guidance for related multi-selections.

### Gaps
- No B2B or admin-specific empirical study of single view vs. separate review was found. The guidance comes from government transactional services and heuristics.
- The DWP research page was seen only as a snippet, so its methods were not checked.

## 5. Optional comment or note fields: placement and progressive disclosure

### Takeaway
Evidence here is thin. General guidance:
- An optional field can sit behind a clearly labelled disclosure (for example "+ Add comment"), as long as nothing required is hidden.
- The disclosure trigger should have strong information scent.
- In a review summary, an empty optional value should be stated explicitly ("Not provided").

No source tests where a comment should go relative to the primary action.

### Cited Findings
- **[Expert] NN/g, progressive disclosure.** Defer secondary features to a secondary view, and label the trigger so it sets clear expectations ("information scent"). The core article is from 2006, outside the preferred date range, and was seen as a snippet only. — [NN/g: Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- **[Expert] Form-design blog.** Inline expansion keeps a form on one page while hiding optional fields that only a minority need. — [Orbit Forms: Progressive disclosure in forms](https://orbitforms.ai/blog/progressive-disclosure-in-forms) (snippet; low-authority source)
- **[Expert] UXPin, 2026 overview.** Defines progressive disclosure and its use cases. Not read in full. — [UXPin: What is progressive disclosure](https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/) (snippet)
- **[Spec] GOV.UK Check answers.** Show skipped optional answers as "Not provided" on the review. — [GOV.UK](https://design-system.service.gov.uk/patterns/check-answers/)
- **[Expert] NN/g confirmations article.** Use progressive disclosure for extra detail so the core decision stays uncluttered. — [NN/g](https://www.nngroup.com/articles/confirmation-dialog/)

### Inferences
- In a 548px panel with a long list, a collapsed "+ Add comment" link costs about one line. An open textarea costs about 3 to 4 lines plus a label.
- Placing the comment just above the confirm button reads as "notes about this action". That keeps it next to the action it annotates.
- Once it is expanded, keep it expanded while text is present. Focus should move into the textarea when the user opens it.
- **Trade-off.** Hiding the field lowers how often people use it. If the business wants comments often, show it open but compact, such as a single-line field that auto-grows.

### Gaps
- No empirical data was found on usage of collapsed vs. always-visible optional comment fields, or on their placement relative to the submit button.
- Luke Wroblewski's and Baymard's form-field research was not reached within the search budget.

## 6. Narrow containers: vertical space budgets, sticky regions, and how much fixed chrome a list can take

### Takeaway
No source gives a numeric chrome budget for side panels. The available evidence points one way:
- Long, narrow scroll regions are harder to use (Steering Law).
- Stacked selection rows push the list out of view.
- Baymard's mobile solution is to cap the selected area at 1 to 2 rows with a "see all" control, or to use a single horizontally scrolling row with overflow cues.

### Cited Findings
- **[Expert] NN/g.** Keep scrollable lists short and wide, and limit the number of items inside them. — [NN/g](https://www.nngroup.com/articles/listbox-dropdown/)
- **[Empirical] Baymard.** Each added chip row pushes the list down.
  - Truncate rows 2 and beyond on desktop.
  - On mobile, cap at 1 to 2 rows plus "See all applied filters", or use one horizontal scrolling row with three overflow cues (truncated last chip, faded edge, count).
  - Putting several chips on one line reduces the vertical space used. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)
- **[Empirical] Baymard.** Placement is less important than visibility, because the tested placements were similarly effective. — [Baymard](https://baymard.com/blog/how-to-design-applied-filters)
- **[Expert] Friedman 2026.** A listbox "takes up space and may require scrolling". — [Smart Interface Design Patterns](https://smart-interface-design-patterns.com/articles/combobox-multiselect-listbox/)

### Inferences
- **Example budget at a 900px panel height.** Panel header and title about 56px, search about 48px, category tabs about 44px, selected area 1 to 2 rows at about 40 to 72px, collapsed comment link about 32px, footer actions about 64px. Fixed chrome comes to about 290 to 320px, leaving about 580px of list, or about 12 to 14 rows at 40 to 44px each. This is my own arithmetic, not a sourced figure.
- At about 700px panel height (a laptop with browser chrome), the list drops to about 7 to 9 rows. That is still scannable within a category tab, but it is the point to stop adding chrome.
- **What to make sticky.** Search, tabs and the selected area are good candidates, because the user needs them while scrolling. The comment and actions sit at the bottom. An expanded comment textarea is the most expensive element, which is another reason to collapse it by default.
- **Horizontal chip row vs. wrapping.** At 548px, about 3 to 4 short chips fit per row. With 1 to 5 picks, wrapping to at most 2 rows is predictable and avoids the overflow-discoverability problem of a horizontal scroll.

### Gaps
- No published usability research gives a minimum visible-row count, or a maximum share of fixed chrome, for side panels or drawers.
- NN/g has written on drawers and side sheets, but no article with numeric limits was found in this pass.

## 7. Accessibility: announcing the selection count, keyboard removal of chips, focus management when the list re-renders

### Takeaway
The patterns are well established even where the evidence is mostly specification:
- Use a polite live region for "N selected", match counts and chip removal.
- Give each chip a remove button labelled "Remove {item}".
- After removal, move focus to an adjacent chip, or to a sensible fallback when no chips are left.
- Keep focus on the item while the list re-filters.
- Do not move focus silently without an announcement.

### Cited Findings
- **[Spec] W3C WAI-ARIA APG, Listbox.**
  - Set `aria-multiselectable="true"`. Use `aria-checked` or `aria-selected` consistently; the APG suggests `aria-checked` for multi-select.
  - On focus, move to the first selected option if there is one.
  - Space toggles the focused option. Shift+Arrow, Home/End (recommended for more than 5 options) and type-ahead (more than 7) are also covered.
  - Provide separate Select all / Unselect all buttons.
  - Use `aria-setsize` and `aria-posinset` for dynamically loaded options.
  - Option groups need accessible names.
  - Listbox options cannot contain interactive elements; use the Grid pattern for that.
  - The APG does not address announcing a selection count. — [W3C APG: Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- **[Empirical, in production] GDS 2019.** Hidden text announces the number of matches and the number selected, plus a busy cue while the user types. — [GOV.UK Accessibility blog](https://accessibility.blog.gov.uk/2019/04/08/accessibility-lessons-dealing-with-a-large-amount-of-form-inputs/)
- **[Spec] Visa design system.** Label the remove control "clear {label}" so the action is predictable. — [Visa: Chips accessibility](https://design.visa.com/components/chips/accessibility/) (snippet)
- **[Spec] eBay Evo.** After a chip is removed, the application must move focus to the next interactive element. — [eBay Evo: Chip accessibility](https://opensource.ebay.com/evo-web/components/chip/accessibility) (snippet)
- **[Spec] CoreUI chip input.** Removable chips expose `aria-label` on the remove button. Backspace and Delete remove a focused chip, and focus moves to a nearby chip. — [CoreUI: Chip input accessibility](https://coreui.io/react/docs/forms/chip-input/accessibility/) (snippet)
- **[Spec] taga11y.** A visually hidden `aria-live="polite"` region announces "tag added", "tag removed", "tags cleared" and dropdown counts. Errors use an assertive alert. — [taga11y accessibility notes](https://binaryunit.codeberg.page/taga11y/api/media/accessibility.md) (snippet)
- **[Spec] Dynatrace.** Do not move focus into newly revealed content when it is activated, because that suppresses the state announcement. — [Dynatrace: ChipGroup a11y](https://developer.dynatrace.com/design/components/content/ChipGroup/a11y/) (snippet)
- **Conflict.** Sources disagree on where focus goes after a chip is removed. eBay says the next interactive element; CoreUI says an adjacent chip. Neither cites user testing. — [eBay](https://opensource.ebay.com/evo-web/components/chip/accessibility); [CoreUI](https://coreui.io/react/docs/forms/chip-input/accessibility/)
- **[Expert] GOV.UK checkboxes guidance.** Do not assume users know how many options they can pick; add a hint. — [GOV.UK: Checkboxes](https://design-system.service.gov.uk/components/checkboxes/) (snippet)

### Inferences
- **Recommended combination.**
  - The list is a native checkbox group, or a listbox with `aria-checked`, grouped by category with names.
  - The selected area is a labelled list of chips, each with a "Remove {name}" button.
  - One polite live region reads, for example, "Extra Time +25% added. 3 selected" and "12 results".
  - After a chip is removed, focus moves to the next chip, else the previous chip, else the search field.
  - Removing a chip also unchecks the item in the list.
- **Re-rendering on filter.** Keep focus in the search input while typing, and never re-mount the focused checkbox. Use stable keys and do not move rows away from the pointer.
- **Category tabs.** Tabs should follow the APG Tabs pattern. Changing tabs must not clear selections or move focus unexpectedly.

### Gaps
- Sarah Higley's multiselect research, believed to be "<select> your poison" (2019, csun/Microsoft), could not be located or verified in this pass. It would be the key empirical source on multi-select usability for screen-reader users.
- No user-tested evidence was found on where focus should go after chip removal.
