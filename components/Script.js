export default ({ children }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} />
)
