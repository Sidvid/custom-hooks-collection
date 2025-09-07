import React from "react";
import useIdle from "../hooks/use-idle";
import Paragraph from "../components/paragraph";
import "../css/idle-use.css";

function IdleUse() {
  const { idle } = useIdle(2000);

  return (
    <div className="idle-container">
      <div className="idle-card">
        <h1 className="idle-title">User Activity Monitor</h1>

        <Paragraph
          type="xl"
          className={`status-text ${idle ? "idle" : "active"}`}
        >
          {idle
            ? "😴 You are idle, please do some activity"
            : "⚡ You are active"}
        </Paragraph>

        <div className="disclaimer">
          <h2 className="disclaimer-title">ℹ️ Disclaimer</h2>
          <p className="disclaimer-text">
            This demo uses a custom <code>useIdle</code> hook to detect when
            you’re inactive.
            <br />
            It checks your mouse, keyboard, scrolling, and window focus. If you
            don’t interact for a few seconds (or switch tabs), you’ll be marked
            as <strong>idle</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdleUse;
