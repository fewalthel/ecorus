/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageEnum } from './LanguageEnum';
export type UserDto = {
	id: number;
	email: string;
	phone: string;
	firstName: string;
	lastName: string;
	isEmailVerified: boolean;
	enabled: boolean;
	createdAt: string;
	language: LanguageEnum;
	balance: number;
};

