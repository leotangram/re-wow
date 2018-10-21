class CreateMedicalRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :medical_records do |t|
      t.string :pet_owner_name
      t.string :pet_name
      t.string :pet_type
      t.string :size
      t.text :description
      t.string :vaccination
      t.date :date

      t.timestamps
    end
  end
end
