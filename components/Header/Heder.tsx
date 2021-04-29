import HeaderItem from '../HeaderItem';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

function Heder() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title={'Home'} Icon={HomeIcon} />
        <HeaderItem title={'Home'} Icon={LightningBoltIcon} />
        <HeaderItem title={'Home'} Icon={BadgeCheckIcon} />
        <HeaderItem title={'Home'} Icon={CollectionIcon} />
        <HeaderItem title={'Home'} Icon={SearchIcon} />
        <HeaderItem title={'Home'} Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  );
}

export default Heder;
