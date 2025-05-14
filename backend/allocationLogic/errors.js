export class AllocationError extends Error {
    constructor(message, student, choice) {
        super(message);
        this.name = 'AllocationError';
        this.student = student;
        this.choice = choice;
    }
}

export class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'ValidationError';
        this.details = details;
    }
}