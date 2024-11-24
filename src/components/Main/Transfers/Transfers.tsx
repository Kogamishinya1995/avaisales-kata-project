/* eslint-disable @cspell/spellchecker */
import { Formik, Form, Field } from "formik";

const Transfers = () => (
  <div className="transfer-bar">
    <h2>Количество пересадок</h2>
    <Formik
      initialValues={{
        transfer1: false,
        transfer2: false,
        transfer3: false,
        transfer4: false,
        transfer5: false,
      }}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => (
        <Form className="transfer-bar__checkbox">
          <label htmlFor="transfer1">
            <Field
              type="checkbox"
              name="transfer1"
              onChange={() => setFieldValue("transfer1", !values.transfer1)}
            />
            Все
          </label>
          <label htmlFor="transfer2">
            <Field
              type="checkbox"
              name="transfer2"
              onChange={() => setFieldValue("transfer2", !values.transfer2)}
            />
            Без пересадок
          </label>
          <label htmlFor="transfer3">
            <Field
              type="checkbox"
              name="transfer3"
              onChange={() => setFieldValue("transfer3", !values.transfer3)}
            />
            1 пересадка
          </label>
          <label htmlFor="transfer4">
            <Field
              type="checkbox"
              name="transfer4"
              onChange={() => setFieldValue("transfer4", !values.transfer4)}
            />
            2 пересадки
          </label>
          <label htmlFor="transfer5">
            <Field
              type="checkbox"
              name="transfer5"
              onChange={() => setFieldValue("transfer5", !values.transfer5)}
            />
            3 пересадки
          </label>
        </Form>
      )}
    </Formik>
  </div>
);

export default Transfers;
