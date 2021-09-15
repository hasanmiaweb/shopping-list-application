import DeleteIcon from "../../assets/icons/delete-icon.png"
const Table = () => {
    return (
        <>
            <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">
                Actions
                {/* <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={printericon}
                      alt="Print"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={downarrowWhite}
                      alt="Print"
                    />
                  </button> */}
                </th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      aria-placeholder="500G"
                      contenteditable
                    >
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      aria-placeholder="500G"
                      contenteditable
                    >
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      aria-placeholder="500G"
                      contenteditable
                    >
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </>
    );
};

export default Table;