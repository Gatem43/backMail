import { Column, Model , Table , DataType} from "sequelize-typescript";

interface MailCreationAttrs {
    name: string;
    description: string;
    data: string;
    author: string;
}

@Table({tableName: 'mail'})
export class Mail extends Model<Mail , MailCreationAttrs> {
    @Column({ type: DataType.INTEGER , unique: true , autoIncrement: true , primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING , allowNull: false})
    name: string;

    @Column({ type: DataType.STRING , allowNull: false})
    description: string;

    @Column({ type: DataType.STRING , allowNull: false})
    data: string;

    @Column({ type: DataType.STRING , allowNull: false})
    author: string;
}