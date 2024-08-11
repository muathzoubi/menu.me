const Hex = (props: any) => {
  return (
    <span
      className=""
      onMouseOver={() => {
        props.setActionName(props.action);
      }}
      onMouseLeave={() => {
        props.setActionName('');
      }}
      key={props.key}
    >
      <svg
        style={{ zIndex: -1 }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 173.20508075688772 200"
      >
        <path
          fill={props.iscutomFill ? 'white' : ''}
          d="M67.54998149518622 10.999999999999998Q86.60254037844386 0 105.65509926170151 10.999999999999998L154.15252187363006 39Q173.20508075688772 50 173.20508075688772 72L173.20508075688772 128Q173.20508075688772 150 154.15252187363006 161L105.65509926170151 189Q86.60254037844386 200 67.54998149518622 189L19.052558883257653 161Q0 150 0 128L0 72Q0 50 19.052558883257653 39Z"
        >
          {' '}
        </path>
        <image className="logo" x={30} y={40} href={props.imglink} />
      </svg>
    </span>
  );
};
export default Hex;
