// simplified data model for stada entry
enum Type { ELEVATOR, ESCALATOR };
enum State { ACTIVE, INACTIVE, UNKNOWN }
export interface Fasta {
    type: Type;
    description: string;
    state: State;
}
