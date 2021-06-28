import ContentLoader from "react-content-loader"

const Loader = () => {
    return (
    <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <rect x="0" y="0" rx="10" ry="10" width="152" height="112" /> 
    <rect x="0" y="120" rx="10" ry="10" width="152" height="34" /> 
    <rect x="0" y="170" rx="10" ry="10" width="76" height="30" /> 
    <rect x="120" y="168" rx="10" ry="10" width="32" height="32" />
    </ContentLoader>
    )
}

export default Loader