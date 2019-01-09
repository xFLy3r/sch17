this.baseUrl = '/api/';
this.adminBaseUrl = `${this.baseUrl}admin/`;

module.exports = {
    baseUrl: this.baseUrl,
    adminBaseUrl: this.adminBaseUrl,
    homepage: `${this.baseUrl}`,
    news: `${this.baseUrl}/news`,
    schedule: `${this.baseUrl}schedule`,
    teachers: `${this.baseUrl}teachers`,
    books: `${this.baseUrl}books`,
    admin: {
        status: `${this.adminBaseUrl}status`,
        login: `${this.adminBaseUrl}login`,
        logout: `${this.adminBaseUrl}logout`,
        createPost: `${this.adminBaseUrl}news`
    }
}
