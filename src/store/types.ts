export const GET_CHECKING_GROUP = 'GET_CHECKING_GROUP';
export const GET_CHECKING_GROUP_DETAILS = 'GET_CHECKING_GROUP_DETAILS';

export const GET_CHECKING_FAMILY = 'GET_CHECKING_FAMILY'

export interface TicketGroup {
    id?: string;
    BookingCode: string;
    CheckIn: number;
    DateTicket: any;
    DateUsed: any;
    TicketNember: string;
    UsageStatus: number;
    eventName: string
}

export interface TicketState {
    ticket: TicketGroup[];
    loaded: boolean;
}

export interface TicketStateGroupDetails {
    ticketGroupDetails: TicketGroup[];
    loaded: boolean;
}

export interface TicketStateFamily {
    ticket: TicketGroup[];
    loaded: boolean;
}

interface TicketGroupAction {
    type: typeof GET_CHECKING_GROUP;
    payload: TicketGroup[];
}

interface TicketGroupDetailsAction {
    type: typeof GET_CHECKING_GROUP_DETAILS;
    payload: TicketGroup;
}

interface TicketFamilyAction {
    type: typeof GET_CHECKING_FAMILY;
    payload: TicketGroup[];
}

export type TicketAction = TicketGroupAction | TicketGroupDetailsAction | TicketFamilyAction;



// --------------------------- //
export const GET_CHECKING_MN = 'GET_CHECKING_MN';
export const GET_CHECKING_SELECT = 'GET_CHECKING_SELECT';

export interface TicketMn {
    id?: string;
    CheckIn: number;
    DateUsed: any;
    UsageStatus: number;
    TicketNember: string;
    EventName: string;
    TicketName: string;
}

export interface TicketSelect {
    EventName: string;
}

export interface TicketStateSelect {
    ticketSelect: TicketSelect[];
}

interface TicketMnAction {
    type: typeof GET_CHECKING_MN;
    payload: TicketMn[];
}

interface TicketSelectAction {
    type: typeof GET_CHECKING_SELECT;
    payload: TicketSelect[];
}

export type TicketManageAction = TicketMnAction | TicketSelectAction;



// --------------------------- //
export const GET_SERVICE = 'GET_SERVICE';
export const CREATE_SERVICE = 'CREATE_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';

export interface Service {
    id?: string;
    BookingCode: string;
    TicketName: string;
    DateUsed: any;
    DateEnd: any;
    Status: number;
    TicketPrice: number;
    ComboPrice: [
        Price: number,
        Qty: number
    ];
}


export interface ServiceState {
    ticket: Service[];
}



interface ServiceAction {
    type: typeof GET_SERVICE;
    payload: Service[];
}

interface createServiceAction {
    type: typeof CREATE_SERVICE;
    payload: string;
}

interface updateServiceAction {
    type: typeof UPDATE_SERVICE;
    payload: any;
}

export type ServiceTicketAction = ServiceAction | createServiceAction | updateServiceAction;
