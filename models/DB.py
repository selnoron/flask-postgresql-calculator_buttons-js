import psycopg2


class DB:
    '''operations with database'''
    @staticmethod
    def connect() -> None:
        try:
            conn = psycopg2.connect(
                host='localhost',
                port=5432,
                user='postgres',
                password='admin',
                dbname='calculator'
            )
            conn.autocommit = True
            return conn
        except Exception as e:
            return e + '\n' + "[ERROR] CONNECTION ERROR!"

    @staticmethod
    def get_hist() -> str:
        conn = DB.connect()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM history")
                rows = cur.fetchall()
            result = []
            for row in rows:
                result.append(row[1])
            return result
        except:
            return 1

    @staticmethod
    def insert_hist(data: str) -> str:
        conn = DB.connect()
        with conn.cursor() as cur:
            cur.execute(query=f"INSERT INTO history (operation) VALUES ('{data}');")
        return 0
        
    
    @staticmethod
    def create() -> str:
        conn = DB.connect()
        try:
            with conn.cursor() as cur:
                cur.execute(f'''CREATE TABLE IF NOT EXISTS history (
                                    id SERIAL PRIMARY KEY, 
                                    operation VARCHAR(100)
                            )''')
            return 0
        except:
            return 1
