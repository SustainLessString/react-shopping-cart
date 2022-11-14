import { Skeleton } from "@mui/material";
import { Wrapper } from "@app/styles/ItemSkeleton.styles";

const ItemSkeleton = () => (
  <Wrapper>
    <div className="img">
      <Skeleton height={"100%"} width={"100%"} />
    </div>
    <div className="div">
      <div className="h3">
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div className="p">
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div className="h3">
        <Skeleton height={"100%"} width={"100%"} />
      </div>
    </div>
    <div className="button">
      <Skeleton height={"100%"} width={"100%"} />
    </div>
  </Wrapper>
);
export default ItemSkeleton;
