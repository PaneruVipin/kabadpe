import React, { useState } from "react";
import "../style/WasteColect.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import WasteAppoinmentTable, {
  AddressPopup,
  ScheduleActionPopup,
} from "./WasteAppoinmentTable";
import { workerAppoinmentsFetch } from "../apis/worker/appoinments";
import { useQuery } from "@tanstack/react-query";

const WasteAppointment = () => {
  const [popUp, setPopUp] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [selectedAppoinment, setSelectedAppoinment] = useState({});

  const { data: appoinments, refetch } = useQuery({
    queryKey: ["workerAppoinments"],
    queryFn: () => workerAppoinmentsFetch({}),
  });
  return (
    <>
      <ScheduleActionPopup setPopUp={setPopUp} popUp={popUp} />
      <AddressPopup
        addressPopup={addressPopup}
        setAddressPopup={setAddressPopup}
        selectedAppoinment={selectedAppoinment}
      />

      <section className="waste-appoint-ment-comp">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3">
            <h3>Appointments </h3>

            <div className="waste-appoint-main-bx">
              <div className="appointment-flex-box">
                <p className="tex-line tex-line2"> Appointments</p>

                <div className="right-search-date-filter-box">
                  <div className="A-search-box">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      autoComplete="off"
                      placeholder="Search..."
                    />
                  </div>

                  <div className="dates-flex-box">
                    <div className="sel-date">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                      />
                    </div>

                    <span>to</span>

                    <div className="sel-date">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                      />
                    </div>
                  </div>

                  <div className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>

              <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3 wasteappoint-prof-table-main-bx">
                {!appoinments?.error ? (
                  <WasteAppoinmentTable
                    appoinments={appoinments}
                    setAddressPopup={setAddressPopup}
                    setPopUp={setPopUp}
                    setSelectedAppoinment={setSelectedAppoinment}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteAppointment;
