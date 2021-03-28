import md5 from 'md5'

export const gravatar = email => {
    const base = 'https://s.gravatar.com/avatar/';
    const emailRefactor = email.trim().toLowerCase();
    const hash = md5(emailRefactor);

    return `${base}${hash}?s=80`;
}