import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } 
    from 
    // "typeorm"
    ;
import { Colegios } from './colegios.model';


@Entity('distritoColegios',{schema:'colegiosDistrit'})
export class DistritoEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameCollague')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date;
    
    @OneToMany(() => Colegios, (collague) => collague.distrit)
    @JoinColumn({name:'colegios_id'})
    collague: Colegios;
    
    @Column('varchar',{
        name:'distrito',
        comment: 'Nombre del distrito',
    })
    distrito:string;

    @Column('varchar',{
        name:'ubicación',
        comment:'Ubicación del colegio',
    })
    ubicacion:string;
 
    
    @Column('varchar',{
        name:'numero_distrito',
        comment:'Numero al que el distrito pertenece'
    })
    
    numberOfDistrit:string;

}
