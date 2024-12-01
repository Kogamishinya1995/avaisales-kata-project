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
            <div className="transfer-bar__checkbox-label">
              <label htmlFor="transferAll">
                <Field
                  type="checkbox"
                  name="transferAll"
                  onChange={() => dispatch(allTransfersChecked())}
                  className="transfer-bar__checkbox-label"
                />
                <p>Все</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label htmlFor="noTransfer">
                <Field
                  type="checkbox"
                  name="noTransfer"
                  onChange={() =>
                    dispatch(transfersChecked("withoutTransfers"))
                  }
                />
                <p>Без пересадок</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label htmlFor="transfer3">
                <Field
                  type="checkbox"
                  name="transfer3"
                  onChange={() => dispatch(transfersChecked("oneTransfer"))}
                />
                <p>1 пересадка</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label htmlFor="transfer4">
                <Field
                  type="checkbox"
                  name="transfer4"
                  onChange={() => dispatch(transfersChecked("twoTransfer"))}
                />
                <p>2 пересадки</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label htmlFor="transfer5">
                <Field
                  type="checkbox"
                  name="transfer5"
                  onChange={() => dispatch(transfersChecked("threeTransfer"))}
                />
                <p>3 пересадки</p>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Transfers;
