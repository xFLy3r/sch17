this.baseUrl = '/api/';
this.adminBaseUrl = `${this.baseUrl}admin/`;

module.exports = {
    homepage: this.baseUrl,
    news: `${this.baseUrl}news`,
    schedule: `${this.baseUrl}schedule`,
    teachers: `${this.baseUrl}teachers`,
    books: `${this.baseUrl}books`,
    admin: {
        status: `${this.adminBaseUrl}status`,
        login: `${this.adminBaseUrl}login`,
        logout: `${this.adminBaseUrl}logout`,
        news: `${this.adminBaseUrl}news`
    }
}
