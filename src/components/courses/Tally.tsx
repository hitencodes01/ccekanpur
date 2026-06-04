export default function Tally() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    TallyPrime Professional Accounting
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    TallyPrime Professional Accounting is a comprehensive financial accounting
                    and business management program designed to equip learners with practical
                    expertise in accounting, inventory management, GST compliance, payroll,
                    taxation, MIS reporting, and financial finalization. The course takes
                    students from basic bookkeeping concepts to advanced corporate accounting
                    workflows used in modern businesses.
                </p>

                {/* Course Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Course Overview
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Learning Level:</strong> Beginner to Advanced
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 80–100 Hours
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Platform:</strong> TallyPrime
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Training Type:</strong> Practical Accounting & Business Management
                        </div>
                    </div>
                </section>

                {/* Module 1 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Accounting Fundamentals & Core Operations
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Getting Started & Company Setup
                            <p className="text-sm text-gray-600 mt-2">
                                Installation, company creation, data migration, F11 features,
                                F12 configurations, and business setup management.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Ledger & Chart of Accounts
                            <p className="text-sm text-gray-600 mt-2">
                                Accounting groups, master ledgers, debtors, creditors,
                                assets, expenses, and bill-wise management.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Voucher Entry Masterclass
                            <p className="text-sm text-gray-600 mt-2">
                                Contra, Payment, Receipt, Journal, Sales, and Purchase vouchers
                                for recording day-to-day business transactions.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Banking Utilities
                            <p className="text-sm text-gray-600 mt-2">
                                Bank reconciliation, cheque management, post-dated cheques,
                                and banking workflows.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 2 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Advanced Inventory & Business Management
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Inventory & Warehouse Control
                            <p className="text-sm text-gray-600 mt-2">
                                Stock groups, stock items, units of measure,
                                warehouse management, and stock transfers.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Order Processing & Tracking
                            <p className="text-sm text-gray-600 mt-2">
                                Purchase orders, receipt notes, sales orders,
                                delivery notes, debit notes, and credit notes.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Manufacturing & Cost Control
                            <p className="text-sm text-gray-600 mt-2">
                                Bill of Materials (BOM), manufacturing journals,
                                cost centers, budgeting, and price list management.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 3 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Advanced Taxation, Payroll & Auditing
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            GST Compliance
                            <p className="text-sm text-gray-600 mt-2">
                                GST setup, CGST, SGST, IGST, RCM,
                                E-Way Bills, GSTR-1, GSTR-2B, and GSTR-3B filing support.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Tax Deducted at Source (TDS)
                            <p className="text-sm text-gray-600 mt-2">
                                TDS configuration, deduction entries,
                                payments, and reporting workflows.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Corporate Payroll Management
                            <p className="text-sm text-gray-600 mt-2">
                                Employee records, salary structures,
                                attendance tracking, EPF, and ESIC compliance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 4 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        MIS Reporting & Financial Finalization
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Financial Statements
                            <p className="text-sm text-gray-600 mt-2">
                                Balance Sheet, Profit & Loss,
                                Trial Balance, and drill-down reporting.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Operational Reports
                            <p className="text-sm text-gray-600 mt-2">
                                Stock summaries, inventory reports,
                                reorder levels, and warehouse analysis.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Statement of Accounts
                            <p className="text-sm text-gray-600 mt-2">
                                Cash Flow, Funds Flow,
                                Interest Calculation, and Ageing Analysis.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
