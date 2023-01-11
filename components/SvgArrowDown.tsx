interface Props extends React.SVGProps<SVGSVGElement> {}

export default function SvgArrowDown(props: Props): JSX.Element {
  return (
    <svg
      viewBox="0 0 52 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L26 26L51 1" stroke="white" />
    </svg>
  );
}
