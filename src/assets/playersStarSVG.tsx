type PlayersStarSVGProps = {
  fill: string;
  personId: number;
};

function PlayersStarSVG(props: PlayersStarSVGProps) {
  return (
    <svg
      id={`playersStarSVG${props.personId}`}
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill={`${props.fill}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5095 17.7915C12.1888 17.6289 11.8112 17.6289 11.4905 17.7915L7.37943 19.8751C6.50876 20.3164 5.52842 19.5193 5.76452 18.562L6.72576 14.6645C6.81767 14.2918 6.72079 13.8972 6.46729 13.6117L3.29416 10.0378C2.66165 9.32543 3.11095 8.18715 4.05367 8.11364L8.48026 7.76848C8.89433 7.73619 9.25828 7.47809 9.43013 7.09485L10.9627 3.67703C11.3675 2.77432 12.6325 2.77432 13.0373 3.67703L14.5699 7.09485C14.7417 7.47809 15.1057 7.73619 15.5197 7.76848L19.9463 8.11364C20.889 8.18715 21.3384 9.32543 20.7058 10.0378L17.5327 13.6117C17.2792 13.8972 17.1823 14.2918 17.2742 14.6645L18.2355 18.562C18.4716 19.5193 17.4912 20.3164 16.6206 19.8751L12.5095 17.7915Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PlayersStarSVG;
