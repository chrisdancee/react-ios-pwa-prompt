const H1 = ({ children, ...props }) => (
  <>
    <h1 {...props}>{children}</h1>
    <style jsx>{`
      h1 {
        color: #e31c5f;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        margin: 0;
        padding: 0;
        text-decoration: underline;
      }
    `}</style>
  </>
);

export default H1;
