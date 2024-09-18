import Mongodb from "@/assets/images/technology/mongodb.png";
import Raddis from "@/assets/images/technology/raddis.png";
import Oracle from "@/assets/images/technology/oracle.png";
import MySql from "@/assets/images/technology/mysql.png";

const DatabaseData = [
  {
    title: "MongodDb",
    img: Mongodb,
    description: [
      `MongoDB is a document-oriented NoSQL database, which means it stores data in flexible, JSON-like documents.
        `,
      `It's highly scalable and can handle large volumes of data and high traffic loads.
        `,
      `MongoDB is often used in applications where a flexible schema is needed, or where data structures may evolve over time.
        `,
      `It's commonly used in web applications, content management systems, and real-time analytics.
        `,
    ],
    color:'#f0fdf4',
    direction:'left'
  },
  {
    title: "Raddis",
    img: Raddis,
    description: [
      `Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.

        `,
      `It's extremely fast because it stores data entirely in memory, which makes it ideal for applications that require low latency and high throughput.

        `,
      `Redis supports various data structures like strings, hashes, lists, sets, and sorted sets, making it versatile for different use cases.

        `,
      `It's commonly used for caching, session management, real-time analytics, and message queuing.

        `,
    ],
    color:'#fef2f2',
    direction:'right'
  },
  {
    title: "MySQL",
    img: MySql,
    description: [
      `MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL).

        `,
      `It's known for its reliability, ease of use, and wide adoption in various applications and industries.

        `,
      `MySQL is suitable for a wide range of applications, from small websites to large-scale enterprise systems.

        `,
      `t supports features like transactions, replication, and clustering, making it a solid choice for mission-critical applications.

        `,
    ],
    color:'#f0f9ff',
    direction:'left'
  },
  {
    title: "Oracle",
    img: Oracle,
    description: [
      `Oracle Database is a powerful relational database management system developed by Oracle Corporation.

        `,
      `It's known for its robustness, scalability, and comprehensive feature set.

        `,
      `Oracle is often used in large enterprises and organizations that require high performance, reliability, and data security.

        `,
      `It supports advanced features like partitioning, advanced compression, and advanced analytics.
        `,
    ],
    color:'#fef2f2',
    direction:'right'
  },

];

export default DatabaseData;
