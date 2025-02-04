import { useNavigate } from "react-router";
import { useMachine } from "@xstate/react";
import Button from "@/components/Button";
import flowMachine from "./state";
import styles from "./flow.module.css";

const Flow = () => {
  const [state, send] = useMachine(flowMachine);
  const navigate = useNavigate();

  console.log(state.context.name);
  console.log(state.context.response);
  console.log(state.value);

  const getCurrentStep = () => {
    switch (state.value) {
      case "step1":
        return 1;
      case "step2":
        return 2;
      case "step3":
        return 3;
      default:
        return 1;
    }
  };

  return (
    <div className={styles.flowContainer}>
      {/* Stepper */}
      <div className={styles.stepper}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`${styles.step} ${
              getCurrentStep() >= step ? styles.activeStep : ""
            }`}
          >
            <div className={styles.stepNumber}>{step}</div>
            <div className={styles.stepLabel}>Step {step}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className={styles.stepContent}>
        {state.matches("step1") && (
          <div>
            <h2>Step 1</h2>
            <p>This is the first step of the flow.</p>
            <button
              onClick={() =>
                send({ type: "NEXT", data: { step1: "completed" } })
              }
            >
              Next
            </button>
          </div>
        )}

        {state.matches("step2") && (
          <div>
            <h2>Step 2</h2>
            <p>This is the second step of the flow.</p>
            <div className={styles.buttonGroup}>
              <button onClick={() => send({ type: "BACK" })}>Back</button>
              <button
                onClick={() =>
                  send({ type: "NEXT", data: { step2: "completed" } })
                }
              >
                Next
              </button>
            </div>
          </div>
        )}

        {state.matches("step3") && (
          <div>
            <h2>Step 3</h2>
            <p>This is the final step of the flow.</p>
            <p>Flow completed!</p>
          </div>
        )}
      </div>

      <Button onClick={() => navigate("/page1")} />
    </div>
  );
};

export default Flow;
