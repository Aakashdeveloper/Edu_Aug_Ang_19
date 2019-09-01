export class ICustomer {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public prime: boolean,
        public gender: string,
        public maxday: string,
        public city: string,
    ) {}
}
