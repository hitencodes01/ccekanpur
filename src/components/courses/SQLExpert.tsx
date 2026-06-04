export default function SQLExpert() {
  return (
    <>
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
      Oracle SQL Expert
    </h2>

    <p className="text-lg text-gray-600 mb-8">
      Oracle SQL Expert is an advanced database training program designed for
      professionals who want to master enterprise-grade SQL development, data
      analytics, database architecture, performance optimization, and modern
      Oracle AI Database technologies. The course covers traditional relational
      database concepts alongside emerging technologies such as AI Vector
      Search, JSON Relational Duality, and Property Graph Queries.
    </p>

    {/* Course Overview */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Course Overview</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <strong>Learning Level:</strong> Intermediate to Advanced
        </div>

        <div className="p-4 border rounded-lg">
          <strong>Duration:</strong> 40–50 Hours
        </div>

        <div className="p-4 border rounded-lg">
          <strong>Platform:</strong> Oracle Database 23ai / 26ai
        </div>

        <div className="p-4 border rounded-lg">
          <strong>Training Type:</strong> Hands-On Labs & Real Projects
        </div>
      </div>
    </section>

    {/* Module 1 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Database Architecture & Development Environment
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          Oracle Database Architecture
          <p className="text-sm text-gray-600 mt-2">
            CDB, PDB, SQL Execution Engine and Multi-Tenant Concepts.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          Development Tools
          <p className="text-sm text-gray-600 mt-2">
            Oracle SQL Developer, SQLcl and Database Actions.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          Advanced DDL Operations
          <p className="text-sm text-gray-600 mt-2">
            Constraints, Schema Design, Privileges and Object Management.
          </p>
        </div>
      </div>
    </section>

    {/* Module 2 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Oracle AI Database Features
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          AI Vector Search & Vector Data Types
        </div>

        <div className="border rounded-lg p-4">
          Semantic Similarity Search & Vector Queries
        </div>

        <div className="border rounded-lg p-4">
          JSON Relational Duality & Document Queries
        </div>

        <div className="border rounded-lg p-4">
          SQL/PGQ Property Graph Queries
        </div>
      </div>
    </section>

    {/* Module 3 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Advanced Data Retrieval & Joins
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          Multi-Table Joins
          <p className="text-sm text-gray-600 mt-2">
            Inner, Outer, Self, Non-Equi, Semi and Anti Joins.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          Recursive & Hierarchical Queries
          <p className="text-sm text-gray-600 mt-2">
            CONNECT BY PRIOR and Recursive CTEs.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          MERGE Operations
          <p className="text-sm text-gray-600 mt-2">
            Advanced UPSERT and Data Synchronization Techniques.
          </p>
        </div>
      </div>
    </section>

    {/* Module 4 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Analytics & Reporting
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          CUBE, ROLLUP & GROUPING SETS
        </div>

        <div className="border rounded-lg p-4">
          Ranking Functions (ROW_NUMBER, RANK, DENSE_RANK)
        </div>

        <div className="border rounded-lg p-4">
          LAG, LEAD & Advanced Window Functions
        </div>

        <div className="border rounded-lg p-4">
          PIVOT & UNPIVOT Reporting Techniques
        </div>
      </div>
    </section>

    {/* Module 5 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Advanced SQL Programming
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          Correlated & Scalar Subqueries
        </div>

        <div className="border rounded-lg p-4">
          Regular Expressions in SQL
        </div>

        <div className="border rounded-lg p-4">
          Set Operators & Data Comparison
        </div>
      </div>
    </section>

    {/* Module 6 */}
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">
        Performance Tuning & Security
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          Query Optimization & Execution Plans
        </div>

        <div className="border rounded-lg p-4">
          Cost-Based Optimizer (CBO) Analysis
        </div>

        <div className="border rounded-lg p-4">
          Indexing Strategies (B-Tree, Bitmap, Function-Based & Vector Indexes)
        </div>

        <div className="border rounded-lg p-4">
          Partitioning, SQL Firewall & Database Security
        </div>
      </div>
    </section>

    {/* Practical Training */}
    <section className="mb-10">
      <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Practical Learning Approach
        </h3>

        <ul className="list-disc pl-5 space-y-2">
          <li>Hands-On Oracle Database Labs</li>
          <li>Enterprise Query Optimization Exercises</li>
          <li>Real-World Reporting & Analytics Projects</li>
          <li>Performance Tuning Case Studies</li>
          <li>Database Security & Administration Scenarios</li>
          <li>AI Vector Search & JSON Data Projects</li>
        </ul>
      </div>
    </section>

    {/* Prerequisites */}
    <section className="mb-10">
      <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Prerequisites
        </h3>

        <p>
          Candidates should have a basic understanding of SQL concepts,
          including SELECT statements, filtering, sorting, joins, and basic
          database structures. Prior experience with relational databases is
          beneficial but not mandatory.
        </p>
      </div>
    </section>

    {/* Career Opportunities */}
    <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
      <h3 className="text-2xl font-semibold mb-4">
        Career Opportunities
      </h3>

      <div className="grid md:grid-cols-2 gap-3">
        <div>• Oracle SQL Developer</div>
        <div>• Database Developer</div>
        <div>• Database Administrator (DBA)</div>
        <div>• Data Analyst</div>
        <div>• Business Intelligence Analyst</div>
        <div>• Data Engineer</div>
        <div>• ETL Developer</div>
        <div>• Technical Architect</div>
        <div>• Database Consultant</div>
        <div>• Enterprise Data Specialist</div>
      </div>
    </section>
  </div>
</>
  )
}
