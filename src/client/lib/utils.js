export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const isPending = status => status === 'requested';
