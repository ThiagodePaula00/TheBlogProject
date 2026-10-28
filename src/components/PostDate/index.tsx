import { connection } from "next/server";
import { formatDatetime, formatDistanceToNow } from "@/src/utils/format-datetime"


type PostDateProps = {
    dateTime: string
}

export async function PostDate({dateTime}: PostDateProps) {
    await connection();

    return <time className="text-slate-600 text-sm/tight dark:text-slate-400" dateTime={dateTime} title={formatDistanceToNow(dateTime)} > {formatDatetime(dateTime)}</time>
}