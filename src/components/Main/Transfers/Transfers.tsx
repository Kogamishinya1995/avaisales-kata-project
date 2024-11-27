import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../slices/index";
import {
  allTransfersChecked,
  transfersChecked,
} from "../../../slices/transfersSlice";

const Transfers = () => {
  const transferState = useSelector((state: RootState) => state.transfers);
  const dispatch = useDispatch();

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
        {() => (
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
                onChange={() => dispatch(transfersChecked("withoutTransfers"))}
              />
              Без пересадок
            </label>
            <label htmlFor="transfer3">
              <Field
                type="checkbox"
                name="transfer3"
                onChange={() => dispatch(transfersChecked("oneTransfer"))}
              />
              1 пересадка
            </label>
            <label htmlFor="transfer4">
              <Field
                type="checkbox"
                name="transfer4"
                onChange={() => dispatch(transfersChecked("twoTransfer"))}
              />
              2 пересадки
            </label>
            <label htmlFor="transfer5">
              <Field
                type="checkbox"
                name="transfer5"
                onChange={() => dispatch(transfersChecked("threeTransfer"))}
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
