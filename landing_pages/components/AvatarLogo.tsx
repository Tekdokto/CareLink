import Image from 'next/image';
import classNames from 'classnames';

const AvatarLogo = ({ imageUrl, altText }) => {
  return (
    <div className={classNames("rounded-full avatar-border border-gray-300 p-1")}>
      {/* <Image src={imageUrl} alt={altText} width={48} height={48} className="rounded-full" /> */}
      <img src={imageUrl} alt={altText} width={35} height={35} className={classNames("rounded-full")} />
    </div>
  );
};

export default AvatarLogo;
