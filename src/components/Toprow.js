import Rowitem from "./Rowitem";
import { TopRowData } from "../utils/TopRowData";

const Toprow = () => {
  return (
    <div className="row toprow">
      <div className="flex_row">
        {TopRowData.map((rowdata) => {
          return rowdata.images.map((url, index) => (
            <Rowitem url={url} ratio={rowdata.ratio} key={index} />
          ));
        })}
      </div>
    </div>
  );
};

export default Toprow;
