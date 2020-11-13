import useScreenDimensions from "hooks/useScreenDimensions";
import useDisplayValues from "hooks/useDisplayValues";

const Conditions = () => {
  const [width, height] = useScreenDimensions();

  const {
    iOSVersion,
    colorScheme,
    isStandalone,
    isiPadOS,
    isiOS,
    shouldShowPrompt,
  } = useDisplayValues({ updateKey: width + height });

  return (
    <>
      <p>
        <span className="condition">The current User Agent&nbsp;</span>
        <span className="value">
          {isiOS ? "is iOS" : isiPadOS ? "is iPadOS" : "is not iOS or iPadOS"}
        </span>
      </p>

      <p>
        <span className="condition">
          We <span className="value">{isStandalone ? "are" : "are not"}</span>
          &nbsp;already within a PWA app
        </span>
      </p>

      <p>
        <span className="condition">
          Based on this, we&nbsp;
          <span className="value">
            {shouldShowPrompt ? "should" : "should not"}
          </span>
          &nbsp;see the prompt
        </span>
      </p>

      {shouldShowPrompt && (
        <>
          <p>
            <span className="condition">You are seeing the iOS&nbsp;</span>
            <span className="value">{String(iOSVersion)}</span>
            <span className="condition">&nbsp;prompt styles</span>
          </p>

          <p>
            <span className="condition">
              The preferred color scheme is&nbsp;
            </span>
            <span className="value">{colorScheme}</span>

            {iOSVersion < 13 && colorScheme === "dark" && (
              <span className="condition">
                &nbsp;but this is only supported in iOS 13+
              </span>
            )}
          </p>
        </>
      )}

      <style jsx>{`
        p {
          color: black;
          font-family: "Inter", sans-serif;
          font-weight: 100;
          line-height: 20px;
        }

        .condition {
          font-weight: 600;
        }

        .value {
          color: #e31c5f;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Conditions;
