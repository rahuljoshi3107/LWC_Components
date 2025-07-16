# 🔒 Fixed Columns in Lightning Datatable (LWC)

This Lightning Web Component (LWC) demonstrates how to **fix the first few columns** in a `lightning-datatable` using **custom CSS loaded via a Static Resource**.

## 🎯 Purpose

`lightning-datatable` does not support column freezing out of the box, and because of Shadow DOM, applying custom CSS directly is limited. This component shows a simple workaround using a **Static Resource** to apply custom styles.

## ✅ What It Does

- Fixes the **first 3 columns** in a `lightning-datatable`
- Applies custom CSS via `loadStyle()` from a static resource
- Supports dynamic data (e.g., Account records)
- Clean and lightweight implementation

## 📦 Files Included

- `accountCustomReport.html` – Template with datatable wrapped in a scrollable container
- `accountCustomReport.js` – Loads custom CSS and fetches Account data
- `cssdatatable` – **Static Resource** (not included here) that contains styles to make the first columns sticky

## 🧠 How It Works

- The `renderedCallback()` in the JS file loads `cssdatatable` using `loadStyle()`.
- The external CSS targets the correct column classes to apply `position: sticky`.
- The result: first 3 columns stay in place while the user scrolls horizontally.

## 📌 Requirements

- A working Apex method (e.g., `getAccountList`) that returns Account data
- A properly structured static CSS file uploaded as a **Static Resource** (named `cssdatatable`)
- The CSS should use `position: sticky` with appropriate z-index and background

## 💡 Example Use Case

If you're displaying wide tables in your Salesforce app and want to **keep key columns like Name, Phone, or ID always visible** — this approach is a great UX enhancement.

## 📄 License
Free to use and modify. No attribution required.

---

**#Salesforce #LWC #LightningDatatable #FixedColumns #StaticResource #UXImprovement**
