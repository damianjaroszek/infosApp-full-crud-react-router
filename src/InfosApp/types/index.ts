export type SingleInfo = {
    id: string;
    title: string;
}

export type SingleInfoDto = Omit<SingleInfo, 'id'>;