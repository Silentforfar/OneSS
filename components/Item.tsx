import useSWR from "swr";
import Link from "next/link";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview, VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import convertB from "@/script/convert_bit";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function Item({user, id}: { user: string, id: string }) {

    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)

    if (!data) return <VscSync className={"animate-spin w-72 h-72"}/>

    if (error || data.status == 233) return <div className={"flex justify-center items-center text-2xl"}>failed to load or not found.</div>

    const {name, size, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="hero-content flex-col lg:flex-row">
                {thumbnails["0"] && <img src={thumbnails["0"].large.url} alt={'thumbnails'} className="max-w-sm rounded-lg shadow-2xl"/>}
                <div className={'space-y-4 flex flex-col items-center'}>
                    <div className="text-5xl font-bold truncate">{name}</div>
                    <div className="text-xl">Size: {convertB(size)}</div>
                    <div className="text-2xl font-bold">Created Date Time</div>
                    <div className="text-xl">{createdDateTime}</div>
                    <div className="text-2xl font-bold">Last Modified Date Time</div>
                    <div className="text-xl">{lastModifiedDateTime}</div>

                    <div className={"btn-group inline"}>
                        <button className={'btn'}>
                            <Link href={`/api/preview?user=${user}&id=${id}`}><a target="_blank"><VscOpenPreview className={"w-6 h-6"}/></a></Link>
                        </button>

                        <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/item/${user}/${id}`}>
                            <VscLiveShare className={'w-6 h-6'}/>
                        </CopyButton>

                        <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/api/item/content?user=${user}&id=${id}`}>
                            <VscCopy className={"w-6 h-6"}/>
                        </CopyButton>

                        <button className={'btn'}>
                            <a href={`/api/item/content?user=${user}&id=${id}`} download><VscCloudDownload className={"w-6 h-6"}/></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
