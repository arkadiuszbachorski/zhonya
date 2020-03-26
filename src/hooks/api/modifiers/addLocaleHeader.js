export default function addBearerToken(instance, language) {
    instance.defaults.headers.common['Accept-Language'] = language;
}
