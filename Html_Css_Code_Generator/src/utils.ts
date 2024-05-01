export default class Utils {
  static sanitizeClassName(className: string): string {
    let sanitizedClassName = className.trim();
    // Remove not allowed characters
    sanitizedClassName = sanitizedClassName.replace(/[^A-Za-z0-9-_]/g, '');
    // Ensure the class name starts with a letter, underscore, or hyphen
    if (!/^[A-Za-z_-]/.test(sanitizedClassName)) {
        // If not, prepend an underscore
        sanitizedClassName = '_' + sanitizedClassName;
    }
    return sanitizedClassName;
  }
}