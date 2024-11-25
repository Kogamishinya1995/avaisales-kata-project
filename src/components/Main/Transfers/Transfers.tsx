import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  allTransfersChecked,
  withoutTransfersChecked,
  oneTransfersChecked,
  twoTransfersChecked,
  threeTransferTransfersChecked,
} from "../../../slices/transfersSlice";

const Transfers = () => {
  const transferState = useSelector((state) => state.transfersReducer);
  const dispatch = useDispatch();
  console.log(transferState);

  return (
    <div className="transfer-bar">
      <h2>Количество пересадок</h2>
      <Formik
        initialValues={{
          transferAll: transferState.allTransfers,
          noTransfer: transferState.withoutTransfers,
          transfer3: transferState.oneTransfer,
          transfer4: transferState.twoTransfer,
          transfer5: transferState.threeTransfer,
        }}
        enableReinitialize
        onSubmit={() => {}}
      >
        {({ values }) => (
          <Form className="transfer-bar__checkbox">
            <label htmlFor="transferAll">
              <Field
                type="checkbox"
                name="transferAll"
                onChange={() => dispatch(allTransfersChecked())}
              />
              Все
            </label>
            <label htmlFor="noTransfer">
              <Field
                type="checkbox"
                name="noTransfer"
                onChange={() => dispatch(withoutTransfersChecked())}
              />
              Без пересадок
            </label>
            <label htmlFor="transfer3">
              <Field
                type="checkbox"
                name="transfer3"
                onChange={() => dispatch(oneTransfersChecked())}
              />
              1 пересадка
            </label>
            <label htmlFor="transfer4">
              <Field
                type="checkbox"
                name="transfer4"
                onChange={() => dispatch(twoTransfersChecked())}
              />
              2 пересадки
            </label>
            <label htmlFor="transfer5">
              <Field
                type="checkbox"
                name="transfer5"
                onChange={() => dispatch(threeTransferTransfersChecked())}
              />
              3 пересадки
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Transfers;
