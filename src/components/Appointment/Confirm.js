import React from "react";
import Button from "components/Button";

export default function Confirm(props) {
  const { message, onConfirm, onCancel } = props;
  // onConfirm sends an api call using axios to delete appointment and renders a state change
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">
        {message ? message : "Are you sure you want to delete this appointment"}
      </h1>
      <section className="appointment__actions">
        <Button danger onClick={onCancel}>
          Cancel
        </Button>
        <Button danger onClick={() => onConfirm()}>
          Confirm
        </Button>
      </section>
    </main>
  );
}
