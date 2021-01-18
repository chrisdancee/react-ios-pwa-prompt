function deviceCheck() {
  const isiOS = /iphone|ipad|ipod/.test(
    window.navigator.userAgent.toLowerCase()
  );
  const isiPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isStandalone =
    "standalone" in window.navigator && window.navigator.standalone;

  return (isiOS || isiPadOS) && !isStandalone;
}

export default function shouldShowPrompt({
  timesToShow = 1,
  promptOnVisit = 1,
  debug = false,
}) {
  let promptData = JSON.parse(localStorage.getItem("iosPwaPrompt"));

  if (promptData === null) {
    promptData = { isiOS: deviceCheck(), visits: 0 };
    localStorage.setItem("iosPwaPrompt", JSON.stringify(promptData));
  }

  if (promptData.isiOS || debug) {
    const aboveMinVisits = promptData.visits + 1 >= promptOnVisit;
    const belowMaxVisits = promptData.visits + 1 < promptOnVisit + timesToShow;

    if (belowMaxVisits || debug) {
      localStorage.setItem(
        "iosPwaPrompt",
        JSON.stringify({
          ...promptData,
          visits: promptData.visits + 1,
        })
      );

      if (aboveMinVisits || debug) {
        return true;
      }
    }
  }

  return false;
}
