interface Props extends React.SVGProps<SVGSVGElement> {}

export default function SvgExternalLink(props: Props) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="22"
        height="22"
        rx="3.5"
        stroke="#F9A826"
        strokeMiterlimit="2.16713"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5109 5.99988C18.5109 5.44759 18.0631 4.99988 17.5109 4.99988L8.51086 4.99988C7.95858 4.99988 7.51086 5.44759 7.51086 5.99988C7.51086 6.55216 7.95858 6.99988 8.51086 6.99988H16.5109V14.9999C16.5109 15.5522 16.9586 15.9999 17.5109 15.9999C18.0631 15.9999 18.5109 15.5522 18.5109 14.9999L18.5109 5.99988ZM6.70711 18.2178L18.218 6.70699L16.8038 5.29277L5.29289 16.8036L6.70711 18.2178Z"
        fill="#F9A826"
      />
    </svg>
  );
}
