import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Shimmer = () => (
  <SkeletonTheme highlightColor="#444" baseColor="#202020">
    <section>
      <Skeleton height={500} width={500} />
    </section>
  </SkeletonTheme>
);
export default Shimmer;
