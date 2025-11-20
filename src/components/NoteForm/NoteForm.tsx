import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./NoteForm.module.css";
import { NoteTag } from "../../types/note";

interface NoteFormProps {
  onSubmit: (data: { title: string; content: string; tag: NoteTag }) => void;
  onCancel: () => void;
}

export const NoteForm = ({ onSubmit, onCancel }: NoteFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", content: "", tag: "Todo" as NoteTag }}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        {/* тут буде контент */}
      </Form>
    </Formik>
  );
};